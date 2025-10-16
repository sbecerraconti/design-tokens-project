# Design Tokens en Espa�ol - Web del Curso

## Descripci�n

Este proyecto es la web oficial del curso "Dise�o e Implementaci�n de Design Tokens", una formaci�n en espa�ol que ense�a la metodolog�a de Design Tokens desde la conceptualizaci�n hasta la implementaci�n pr�ctica en desarrollo.

## Tecnolog�as

- **React Router 7** - Framework de routing para React con SSR
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado est�tico
- **Bulma** - Framework CSS
- **Sass** - Preprocesador CSS
- **Style Dictionary** - Gesti�n de Design Tokens
- **Vite** - Build tool y bundler

## Instalaci�n

```bash
# Instalar dependencias
npm ci

# Modo desarrollo
npm run dev

# Build de producci�n
npm run build

```

## Estructura del Proyecto

```
dsweb-tercera-edicion/
app/
 home/           # Componente principal de la home
 routes/         # Rutas de React Router
 root.tsx        # Layout ra�z con navegaci�n y footer
 app.scss        # Estilos globales
 texts.json      # Contenido de textos mocked
 public/             # Assets est�ticos
 build.js            # Script de build con Style Dictionary
```

## Caracter�sticas

### Secciones

1. **Hero** - Presentaci�n del curso con CTA
2. **Introducci�n** - �Por qu� Design Tokens?
3. **Empresas** - Logos de empresas que usan Design Tokens
4. **Sesiones** - Detalle de las 12 sesiones del curso
5. **Profesores** - Informaci�n sobre los instructores
6. **Precios** - Planes disponibles (Newsletter, Curso, Asesor�a)
7. **Video** - Video explicativo del curso
8. **FAQs** - Preguntas frecuentes


## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera el build de producci�n (incluye Style Dictionary)

## Enlaces

- **Web**: [designtokens.es](https://designtokens.es)
- **Newsletter**: [Substack](https://designtokenses.substack.com)
- **LinkedIn**: [designtokens-es](https://www.linkedin.com/company/designtokens-es/)
- **Email**: hola@designtokens.es

## Licencia

� 2025 Design Tokens en Espa�ol. Todos los derechos reservados.

---
