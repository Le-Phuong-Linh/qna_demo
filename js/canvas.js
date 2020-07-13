function drawHistogramPlot(data) {
    let canvas = document.getElementById('canvas'); 
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = "black"; // Задаём чёрный цвет для линий 
    ctx.lineWidth = 2.0; // Ширина линии
    ctx.beginPath(); // Запускает путь
    ctx.moveTo(30, 10); // Указываем начальный путь
    ctx.lineTo(30, 460); // Перемешаем указатель
    ctx.lineTo(500, 460); // Ещё раз перемещаем указатель
    ctx.stroke(); // Делаем контур

    // Цвет для рисования
    ctx.fillStyle = "black";
    // Цикл для отображения значений по Y 
    for(let i = 0; i < 6; i++) { 
        ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
        ctx.beginPath(); 
        ctx.moveTo(25, i * 80 + 60); 
        ctx.lineTo(30, i * 80 + 60); 
        ctx.stroke(); 
    }
    
    for(var i = 0; i < data.length; i++) { 
        ctx.fillText("Answer #" + (i+1), 50+ i*100, 475); 
    }
  
    ctx.fillStyle = "#26a69a"; 

    for(var i=0; i<data.length; i++) { 
        var dp = data[i]; 
        ctx.fillRect(40 + i*100, 460-dp*5 , 50, dp*5); 
    }
}