const winston = require('winston')
const { combine, timestamp, json, prettyPrint, errors, printf } = winston.format

winston.loggers.add('ProductsLogger', {
    format: combine(
        errors({stack: true}),
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.File({filename: 'logs/products.log', level: 'error'})
    ],
    defaultMeta: { service: 'ProductsService' }
})

winston.loggers.add('UsersLogger', {
    format: combine(
        errors({stack: true}),
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.File({filename: 'logs/users.log', level: 'error'})
    ],
    defaultMeta: { service: 'UsersService' }
})

winston.loggers.add('ConsoleLogger', {
    format: printf(info => `${info.message}`),
    transports: [
        new winston.transports.Console()
    ],
})