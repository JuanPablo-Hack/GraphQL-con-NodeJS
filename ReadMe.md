# Introduccion a GraphQL con NodeJ

## Juan Pablo de Jesus Figueroa Jaramillo

![Screen 5](/img/GQL.png)

Es un query language, es decir, un lenguaje de consultas. Un lenguaje es un sistema compartido por dos partes que les permite comunicarse entre sí.

Un lenguaje de consultas como GraphQL nos permite hacer consultas y esperar una respuesta predecible. Un ejemplo de una lenguaje de consultas es SQL, el cual se enfoca en las consultas a una base de datos.

Aunque suene un poco confuso, SQL no tiene nada que ver con GraphQL, ya que el primero está pensado para trabajar con bases de datos, y GraphQL es para comunicar clientes y servidores.

GraphQL es una herramienta que se presenta como una alternativa a REST. La principal mejora que propone es la optimización, además de trasladar la información del servidor al cliente.

Una de las ventajas más importantes de GraphQL es que es agnóstico de plataforma, lo que quiere decir que se puede implementar en más de 20 lenguajes.

El principal objetivo de GraphQL es evitar las múltiples consultas al servidor.

## Diferencias entre ApiRest y GraphQL

## ApiRest

    Es solo una convención: Es una manera de comunicarse entre el servidor y cliente, cada uno tiene sus reglas.
    El servidor expone recursos: Los clientes se tienen que adecuarse a como están expuestos.
    Hace overfetching: Envía más información de la que se necesita.
    Múltiples request por vista: Muy costoso en performance, básicamente es una aplicación en blanco que aún no ha cargado datos o tiene custom endpoints.
    Documentación ajena al desarrollo: No hay un estándar por lo que depende mucho del desarrollador para mantenerla.

## GraphQL

    Lenguaje tipado y validable: Le damos una forma de lo que recibe y lo que devolvemos, Además de agregarle seguridad.
    El Cliente define que recibe: Haciendo una consulta, de la estructura que se define como respuesta.
    Envía lo necesario: Se tiene control total de las respuestas que se esperan del servidor.
    Hace un solo request por vista: Se maneja un solo row, prácticamente en solo request puedes mandar todo lo que necesitas.