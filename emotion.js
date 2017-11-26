function compareImages(img1, img2)
{
    var results = new Array(8);
    
    results[0] = img1.anger - img2.anger; 
    results[1] = img1.contempt - img2.contempt; 
    results[2] = img1.disgust - img2.disgust; 
    results[3] = img1.fear - img2.fear; 
    results[4] = img1.happiness - img2.happiness; 
    results[5] = img1.neutral - img2.neutral; 
    results[6] = img1.sadness - img2.sadness; 
    results[7] = img1.surpise - img2.surpise; 

    var max = 0;
    var index = -1;
    for (i = 0; i < 8; i++)
    {
        if (Math.abs(results[i]) > max)
        {
            max = Math.abs(results[i]);
            index = i;
        }
    }
    return index.toString();
}