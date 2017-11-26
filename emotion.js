function compareImages(img1, img2)
{
    var results = [8];
    for (i = 0; i <= 8; i++)
    {
        results[i] = img1[i] - img2[i];
    }
    var max = 0;
    var index = -1;
    for (i = 0; i <= 8; i++)
    {
        if (Math.abs(results[i]) > max)
        {
            max = Math.abs(results[i]);
            index = i;
        }
    }
}