// проблемы с тем, что div нет на сервере,
// и весь этот код ниже только на клиентской части работает,
// тогда по умолчанию ширина сначала выше, а потом подстраивается,
// после пары кликов на странице, можно ограничить по идее ширину кнопок длиной первого раздела,
// тк она самая длинная, но это не очень хорошее решение

// type measureTextType = (
//   text: string,
//   fontFamily: string,
//   fontSize: string,
// ) => string;

// первый вариант -
// export const measureText: measureTextType = (
//   text: string,
//   fontFamily: string,
//   fontSize: string,
// ) => {
//   let widthString = 'auto';
//   if (typeof window !== 'undefined') {
//     const element = document.createElement('div');
//     const textNode = document.createTextNode(text);

//     element.appendChild(textNode);

//     element.style.position = 'absolute';
//     element.style.visibility = 'hidden';
//     element.style.height = 'auto';
//     element.style.width = 'auto';
//     element.style.whiteSpace = 'nowrap';
//     element.style.fontFamily = fontFamily;
//     element.style.fontSize = fontSize;

//     document.body.appendChild(element);

//     const width = element.clientWidth;

//     element.parentNode?.removeChild(element);

//     if (width > 91) {
//       widthString = `${width + 10}px`;
//     } else {
//       widthString = `${width + 3}px`;
//     }
//   }
//   return widthString;
// };

type measureTextType = (text: string, fontSize: number) => string;

// источник: https://gist.github.com/tophtucker/62f93a4658387bb61e4510c37e2e97cf
// https://blocks.roadtolarissa.com/tophtucker/62f93a4658387bb61e4510c37e2e97cf
export const measureText: measureTextType = (
  string: string,
  fontSize: number,
) => {
  const widths = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0.12783203125, 0.33375000953674316, 0.4087500095367432,
    0.6400000095367432, 0.5599999904632569, 0.8800000190734864, 0.8, 0.18125,
    0.4, 0.4, 0.5, 0.7200000286102295, 0.25, 0.4, 0.25, 0.4, 0.5599999904632569,
    0.5, 0.5599999904632569, 0.5, 0.5599999904632569, 0.5, 0.5599999904632569,
    0.5599999904632569, 0.5599999904632569, 0.5599999904632569,
    0.27875001430511476, 0.3200000047683716, 0.7200000286102295,
    0.7200000286102295, 0.7200000286102295, 0.48000001907348633,
    0.9600000381469727, 0.8800000190734864, 0.8, 0.7200000286102295,
    0.8800000190734864, 0.7200000286102295, 0.7200000286102295, 0.8,
    0.8800000190734864, 0.4, 0.5599999904632569, 0.8800000190734864,
    0.7200000286102295, 1.040000057220459, 0.8800000190734864, 0.8,
    0.7200000286102295, 0.8, 0.8800000190734864, 0.5599999904632569,
    0.6400000095367432, 0.8800000190734864, 0.8800000190734864,
    1.040000057220459, 0.8800000190734864, 0.8, 0.8, 0.4, 0.4,
    0.33375000953674316, 0.6400000095367432, 0.6400000095367432,
    0.33375000953674316, 0.5599999904632569, 0.6400000095367432,
    0.48000001907348633, 0.5599999904632569, 0.48000001907348633,
    0.5599999904632569, 0.5599999904632569, 0.6400000095367432,
    0.3200000047683716, 0.4387500286102295, 0.6400000095367432,
    0.3200000047683716, 0.9600000381469727, 0.6400000095367432,
    0.5599999904632569, 0.6400000095367432, 0.5599999904632569,
    0.48000001907348633, 0.4, 0.4, 0.6400000095367432, 0.6400000095367432,
    0.8800000190734864, 0.6400000095367432, 0.6400000095367432,
    0.5599999904632569, 0.48000001907348633, 0.20125000476837157,
    0.48000001907348633, 0.7200000286102295,
  ];
  const avg = 0.5989245567823706;

  const width =
    string
      .split('')
      .map((c: string) =>
        c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg,
      )
      .reduce((cur, acc) => acc + cur) * fontSize;

  // но не совсем точно подгоняет, приходится подправлять
  if (width > 130) {
    return `${width - 10}px`;
  } else if (width > 100) {
    return `${width + 7}px`;
  } else {
    return `${width}px`;
  }
};
