b = [33, 73, 32, 103, 39, 106, -2, 159, 0, 151, 80, 140, 66, 128, 87, 78, 79, 119, 27, 117, 8237, 95, 91, 133, 80, 135, 80, 130, 39, 116, 105, 105, 110, 56, 71, 129, 28, 75, 62, 78, 69]
n = len(b)
for i in range(n // 2):
    temp = b[-i]
    b[-i] = b[i]
    b[i] = temp
flag = []
for i in range(len(b)):
    if i % 2 == 0:
        flag.append(chr(b[i] - i))
    else:
        flag.append(chr(b[i] + i))

print("".join(flag))