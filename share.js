document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-button');
    const sharePopup = document.getElementById('share-popup');
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    shareButton.addEventListener('click', () => {
        sharePopup.style.display = 'block';
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', () => {
        sharePopup.style.display = 'none';
        overlay.style.display = 'none';
    });

    document.getElementById('copy-url-button').addEventListener('click', () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('URL이 클립보드에 복사되었습니다!');
        });
        sharePopup.style.display = 'none';
        overlay.style.display = 'none';
    });

    document.getElementById('save-image-button').addEventListener('click', () => {
        const resultContainer = document.querySelector('.container');
        
        // 팝업창 숨기기
        sharePopup.style.display = 'none';
        overlay.style.display = 'none';
        // 공유하기 버튼 숨기기
        shareButton.style.display = 'none';

        html2canvas(resultContainer, {
            backgroundColor: null,
            useCORS: true,
            scale: 2,
            scrollX: 0,
            scrollY: 0,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: document.documentElement.offsetHeight
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'hexaco_result.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(error => {
            console.error('이미지 저장 중 오류가 발생했습니다:', error);
        }).finally(() => {
            // 공유하기 버튼 다시 표시하기
            shareButton.style.display = 'block';
        });
    });
});
