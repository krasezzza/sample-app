const info = (message, object = null) => {
  if (object) {
    console.info(`[${ getTimeStamp() }] [INFO] ${ message }`, object);
  } else {
    console.info(`[${ getTimeStamp() }] [INFO] ${ message }`);
  }
};

const warn = (message, object = null) => {
  if (object) {
    console.warn(`[${ getTimeStamp() }] [WARN] ${ message }`, object);
  } else {
    console.warn(`[${ getTimeStamp() }] [WARN] ${ message }`);
  }
};

const error = (message, object = null) => {
  if (object) {
    console.error(`[${ getTimeStamp() }] [ERROR] ${ message }`, object);
  } else {
    console.error(`[${ getTimeStamp() }] [ERROR] ${ message }`);
  }
};

const debug = (message, object = null) => {
  if (object) {
    console.debug(`[${ getTimeStamp() }] [DEBUG] ${ message }`, object);
  } else {
    console.debug(`[${ getTimeStamp() }] [DEBUG] ${ message }`);
  }
};

const getTimeStamp = () => {
  return new Date().toISOString()
    .replace('T', ' ')
    .replace('Z', '')
    .split('.')[0];
};

module.exports = { info, warn, error, debug };
