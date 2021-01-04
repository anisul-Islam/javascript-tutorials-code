// break and continue keyword program

// The break statement "jumps out" of a loop or switch.
for (var i = 1; i <= 100; i++) {
    if (i == 20)
        break;
    document.write(i + "<br/>");
}

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
for (var i = 1; i <= 100; i++) {
    if (i == 20)
        continue;
    document.write(i + "<br/>");
}