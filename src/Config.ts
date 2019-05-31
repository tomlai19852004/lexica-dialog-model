interface Config {
  uni: string;
  key: string;
  value:
    | string
    | number
    | boolean
    | string[]
    | number[]
    | boolean[]
    | {
        [key: string]: string[] | number[] | boolean | string | number | boolean;
      };
}

export { Config };
