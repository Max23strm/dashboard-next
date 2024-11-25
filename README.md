# Development
Pasos para levantar a app en desarrollo

1. levantar la base de datos

```
docker compose up -d
```
2. Renombrar e .env.tempate a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```