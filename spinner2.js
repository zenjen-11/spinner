const sniperArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let timeInit = -100;
for (let i = 0; i < 10; i++) {
  timeInit += 200;
  setTimeout(() => {
    process.stdout.write(sniperArr[i]);
  }, timeInit);
}