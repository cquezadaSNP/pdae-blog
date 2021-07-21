# Datos Abiertos Ecuador: contenidos

## Configuración Nginx

```
location /blog/ {
    proxy_pass https://blog-pdae.netlify.app/blog/;
}

location /visualiza/ {
    proxy_pass https://blog-pdae.netlify.app/visualiza/;
}

location /normativa/ {
    proxy_pass https://blog-pdae.netlify.app/normativa/;
}

location /centro-de-aprendizaje/ {
    proxy_pass https://blog-pdae.netlify.app/centro-de-aprendizaje/;
}
```