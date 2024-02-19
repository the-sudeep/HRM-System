
//error handling mechanisms 
module.exports = function(){
    process.on('uncaughtException', err => {
        winston.error(err.message);
        process.exit(1); // Exit the process after uncaught exception
    });
      
      // Error handling middleware for unhandled rejections
      process.on('unhandledRejection', (reason, promise) => {
        console.error(reason);
    });    
}