ink = input()
if len(ink)<=2:
    print(ink)
else:
    ln = len(ink)
    print(f'{ink[0]}{ln}{ink[ln-1]}')
