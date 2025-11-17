import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://nissinsolutions.com.br/api/wp-json/wp/v2/',
    headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    }
})

// Interceptor para adicionar timestamp e quebrar cache
api.interceptors.request.use((config) => {
    // Adiciona timestamp como parâmetro de query para cache-busting
    const separator = config.url?.includes('?') ? '&' : '?'
    config.url = `${config.url}${separator}_t=${Date.now()}`
    
    // Headers adicionais para forçar atualização no servidor
    if (config.headers) {
        config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        config.headers['Pragma'] = 'no-cache'
        config.headers['Expires'] = '0'
    }
    
    return config
})

// Interceptor de resposta para tratar 304 como sucesso (caso ainda ocorra)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Se for erro 304, tenta fazer uma nova requisição sem cache
        if (error.response?.status === 304) {
            const originalRequest = error.config
            // Remove qualquer header de condição que possa causar 304
            if (originalRequest.headers) {
                delete originalRequest.headers['If-None-Match']
                delete originalRequest.headers['If-Modified-Since']
            }
            // Adiciona novo timestamp para forçar nova requisição
            const separator = originalRequest.url?.includes('?') ? '&' : '?'
            originalRequest.url = originalRequest.url?.replace(/[?&]_t=\d+/, '') + `${separator}_t=${Date.now()}`
            return api.request(originalRequest)
        }
        return Promise.reject(error)
    }
)