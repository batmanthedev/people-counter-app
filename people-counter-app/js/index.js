
let count = 0;
let total = 0;

function increment()
{
    count++;
    document.getElementById("count").innerText = count; // Gets an element specified by ID and sets the text of that element
}

function save()
{
    total += count;
    document.getElementById("save-history").innerText += " " + count;
    count = 0;
    document.getElementById("count").innerText = count;
}

function updateTotal()
{
    document.getElementById("total").innerText = "Total: " + total;
}

