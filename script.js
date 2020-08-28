(async () => {
    video = document.getElementById('video');
    let stream = null;
    try {
            stream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    facingMode: 'user'
                }
            });
            video.srcObject = stream;
        } catch (err) {
            console.error('Error occurred while trying to fetch video stream');
        }
    }) ();
