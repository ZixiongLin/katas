result = 1
lastValue = 1
CELLS = 1001
"""
for (let index = 1 ; index < int(1001/2)+1; index++) {
    let values = Array.from({length:4}, (_,i) => BigInt(lastValue + BigInt((2)*index * (i+1))))
    lastValue = values[values.length -1]
    result += BigInt(result) + BigInt(values[0]) + BigInt(values[1]) + BigInt(values[2]) + BigInt(values[3]) 
}
"""
for index in range(int(1003/2)):
    values = []
    if index == 0:
        continue;
        # TODO: write code...
    for v in range(4):
        values.append(lastValue + (2*index* (v+1)))
    lastValue = values[-1]
    result += values[0] + values[1] + values[2] + values[3]
    # TODO: write code...

print(result)