const Logger = require('./logger') 

//Creación de un objeto
const dbLogger = new Logger('DB') // Creas un objeto, esto llama por default el constructor de la clase
dbLogger.info('This is a informational message')

//Creación de otro objeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')


