import axios from "axios";

export function axiosGet(parmsOption) {
  const defaultOption = {
    blockUI: false,
    unBlockUI: false,
    logOnError: true,
    logOnSuccess: true,
    axiosConfig: {},
  };

  const options = Object.assign(defaultOption, parmsOption);
  if (!options.hasOwnProperty("url") || typeof options.url === "undefined") {
    throw new Error("La proprietà 'url' è obbligatoria.");
  }
  if (
    !options.hasOwnProperty("success") ||
    typeof options.success === "undefined" ||
    typeof options.success !== "function"
  ) {
    throw new Error(
      "La proprietà 'success' è obbligatoria e deve essere una funzione."
    );
  }
  if (
    !options.hasOwnProperty("error") ||
    typeof options.error === "undefined" ||
    typeof options.error !== "function"
  ) {
    throw new Error(
      "La proprietà 'error' è obbligatoria e deve essere una funzione."
    );
  }
  if (options.blockUI) {
    blockUI();
  }

  axios
    .get(options.url, options.axiosConfig)
    .then((response) => {
      if (options.logOnSuccess) {
        console.log("success", response);
      }
      options.success(response);
    })
    .catch((error) => {
      if (options.logOnError) {
        console.log("error", error);
      }
      options.error(error);
    })
    .finally(() => {
      if (options.unBlockUI) {
        $.unblockUI();
      }
    });
}

export function axiosPost(parmsOption) {
  const defaultOption = {
    blockUI: true,
    unBlockUI: true,
    logOnError: true,
    logOnSuccess: true,
    axiosConfig: {},
  };

  const options = Object.assign(defaultOption, parmsOption);
  if (!options.hasOwnProperty("url") || typeof options.url === "undefined") {
    throw new Error("La proprietà 'url' è obbligatoria.");
  }
  if (!options.hasOwnProperty("data") || typeof options.data === "undefined") {
    throw new Error("La proprietà 'data' è obbligatoria.");
  }
  if (
    !options.hasOwnProperty("success") ||
    typeof options.success === "undefined"
  ) {
    throw new Error(
      "La proprietà 'success' è obbligatoria e deve essere una funzione."
    );
  }
  if (
    !options.hasOwnProperty("error") ||
    typeof options.error === "undefined"
  ) {
    throw new Error(
      "La proprietà 'error' è obbligatoria e deve essere una funzione."
    );
  }
  if (options.blockUI) {
    blockUI();
  }
  axios
    .post(options.url, options.data, options.axiosConfig)
    .then((data) => {
      if (options.logOnSuccess) {
        console.log("success", data);
      }
      options.success(data);
    })
    .catch((error) => {
      if (options.logOnError) {
        console.log("error", error);
      }
      options.error(error);
    })
    .finally(() => {
      if (options.unBlockUI) {
        $.unblockUI();
      }
    });
}

export function axiosPut(parmsOption) {
  const defaultOption = {
    blockUI: true,
    unBlockUI: true,
    logOnError: true,
    logOnSuccess: true,
    axiosConfig: {},
  };

  const options = Object.assign(defaultOption, parmsOption);
  if (!options.hasOwnProperty("url") || typeof options.url === "undefined") {
    throw new Error("La proprietà 'url' è obbligatoria.");
  }
  if (!options.hasOwnProperty("data") || typeof options.data === "undefined") {
    throw new Error("La proprietà 'data' è obbligatoria.");
  }
  if (
    !options.hasOwnProperty("success") ||
    typeof options.success === "undefined"
  ) {
    throw new Error(
      "La proprietà 'success' è obbligatoria e deve essere una funzione."
    );
  }
  if (
    !options.hasOwnProperty("error") ||
    typeof options.error === "undefined"
  ) {
    throw new Error(
      "La proprietà 'error' è obbligatoria e deve essere una funzione."
    );
  }
  if (options.blockUI) {
    blockUI();
  }
  axios
    .put(options.url, options.data, options.axiosConfig)
    .then((data) => {
      if (options.logOnSuccess) {
        console.log("success", data);
      }
      options.success(data);
    })
    .catch((error) => {
      if (options.logOnError) {
        console.log("error", error);
      }
      options.error(error);
    })
    .finally(() => {
      if (options.unBlockUI) {
        $.unblockUI();
      }
    });
}

export function axiosPatch(parmsOption) {
  const defaultOption = {
    blockUI: true,
    unBlockUI: true,
    logOnError: true,
    logOnSuccess: true,
    axiosConfig: {},
  };

  const options = Object.assign(defaultOption, parmsOption);
  if (!options.hasOwnProperty("url") || typeof options.url === "undefined") {
    throw new Error("La proprietà 'url' è obbligatoria.");
  }
  if (!options.hasOwnProperty("data") || typeof options.data === "undefined") {
    throw new Error("La proprietà 'data' è obbligatoria.");
  }
  if (
    !options.hasOwnProperty("success") ||
    typeof options.success === "undefined"
  ) {
    throw new Error(
      "La proprietà 'success' è obbligatoria e deve essere una funzione."
    );
  }
  if (
    !options.hasOwnProperty("error") ||
    typeof options.error === "undefined"
  ) {
    throw new Error(
      "La proprietà 'error' è obbligatoria e deve essere una funzione."
    );
  }
  if (options.blockUI) {
    blockUI();
  }
  axios
    .patch(options.url, options.data, options.axiosConfig)
    .then((data) => {
      if (options.logOnSuccess) {
        console.log("success", data);
      }
      options.success(data);
    })
    .catch((error) => {
      if (options.logOnError) {
        console.log("error", error);
      }
      options.error(error);
    })
    .finally(() => {
      if (options.unBlockUI) {
        $.unblockUI();
      }
    });
}

export function axiosDelete(parmsOption) {
  const defaultOption = {
    blockUI: false,
    unBlockUI: false,
    logOnError: true,
    logOnSuccess: true,
    axiosConfig: {},
  };

  const options = Object.assign(defaultOption, parmsOption);
  if (!options.hasOwnProperty("url") || typeof options.url === "undefined") {
    throw new Error("La proprietà 'url' è obbligatoria.");
  }
  if (
    !options.hasOwnProperty("success") ||
    typeof options.success === "undefined" ||
    typeof options.success !== "function"
  ) {
    throw new Error(
      "La proprietà 'success' è obbligatoria e deve essere una funzione."
    );
  }
  if (
    !options.hasOwnProperty("error") ||
    typeof options.error === "undefined" ||
    typeof options.error !== "function"
  ) {
    throw new Error(
      "La proprietà 'error' è obbligatoria e deve essere una funzione."
    );
  }
  if (options.blockUI) {
    blockUI();
  }

  axios
    .delete(options.url, options.axiosConfig)
    .then((response) => {
      if (options.logOnSuccess) {
        console.log("success", response);
      }
      options.success(response);
    })
    .catch((error) => {
      if (options.logOnError) {
        console.log("error", error);
      }
      options.error(error);
    })
    .finally(() => {
      if (options.unBlockUI) {
        $.unblockUI();
      }
    });
}
