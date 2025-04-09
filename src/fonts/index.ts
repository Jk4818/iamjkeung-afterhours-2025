// fonts/index.ts
// fonts/myFont.ttf
import localFont from "next/font/local";

export const laoMN = localFont({
  src: [
    {
      path: 'lao-mn.ttf',
      weight: '400',
      style: "normal"
    },
    {
      path: 'lao-mn-bold.ttf',
      weight: '700',
      style: "bold"
    }
  ],
  variable: '--font-laomn'
});
export const pingfang = localFont({
  src: [
    {
      path: 'pingfang-medium.ttf',
      weight: '400',
      style: "normal"
    },
    {
      path: 'pingfang-bold.ttf',
      weight: '700',
      style: "bold"
    }
  ],
  variable: '--font-pingfang'
});