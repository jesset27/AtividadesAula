const n = parseInt(3);

function numerPrimo(n)
{
    if (n <= 1)
        return false;
    
    for (let i = 2; i < n; i++)
    {
        if (n % i === 0)
            return false;
    }
    return true;
}

console.log(numerPrimo(7));