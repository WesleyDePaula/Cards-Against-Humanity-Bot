exports.info = function info(content) {
    console.log(`[${new Date().toLocaleString()}] INFO: ` + content);
};

exports.warn = function warn(content) {
    console.warn(`[${new Date().toLocaleString()}] WARNING: ` + content);
};

exports.error = function error(content) {
    console.error(`[${new Date().toLocaleString()}] ERROR: ` + content);
};

