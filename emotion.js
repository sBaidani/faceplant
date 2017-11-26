function compareImages(img1, img2)
{
    var results = new Array(8);
    var substr = new Array(2);
    for (i = 0; i < 8; i++)
    {
        for (j = 0; j < img1[i].length; j++)
        {
            substr.append(img1[i].substring(":", img1[i].length));
        }
    }
    console.log(substr);
    for (i = 0; i < 8; i++)
    {
        results[i] = img1[i] - img2[i];
    }
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
    var rtn = "" + index.toString() + ": " + max.toString();
    return 
}