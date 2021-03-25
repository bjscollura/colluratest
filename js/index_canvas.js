let canvas = document.getElementById("index_canvas");
if (canvas.getContext){
  let ctx = canvas.getContext('2d');
  let aug = 20;

  ctx.fillStyle = '#202026';
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  for (let ii = 0; ii < 5; ii++) {
    for (let jj = 0; jj < 5; jj++) {
      ctx.fillStyle = `rgb(255, ${Math.floor(255 - aug * ii)}, ${Math.floor(255 - aug * jj)})`;
      ctx.fillRect(ii * 25, jj * 25, 50, 50);
    }
  }
  for (let ii = 0; ii < 5; ii++) {
    for (let jj = 0; jj < 5; jj++) {
      ctx.fillStyle = `rgb(0, ${Math.ceil(255 - aug * ii)}, ${Math.ceil(255 - aug * jj)})`;
      ctx.fillRect(ii * 25, jj * 25 + 200, 50, 50);
    }
  }
  alert(`255, ${255 - aug}, ${255 - aug * 2}, ${255 - aug * 3}, ${255 - aug * 4}, ${255 - aug * 5}`)
}