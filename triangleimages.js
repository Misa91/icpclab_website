const cursor = document.querySelectorAll('.cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.forEach(item => {
        item.style.left = e.pageX - item.clientWidth / 2 + 'px';
        item.style.top = e.pageY - item.clientHeight / 2 + 'px';
      });
    });

