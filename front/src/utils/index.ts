export const dateFormat = (serial: number, format: string = "YYYY/MM/DD hh:mm:ss.SSS") => {
    const date = new Date(serial);
    return format
        .replace(/YYYY/, date.getFullYear().toString())
        .replace(/MM/, (date.getMonth() + 1).toString())
        .replace(/DD/, date.getDate().toString())
        .replace(/hh/, date.getHours().toString())
        .replace(/mm/, date.getMinutes().toString())
        .replace(/ss/, date.getSeconds().toString())
        .replace(/SSS/, date.getMilliseconds().toString());
};