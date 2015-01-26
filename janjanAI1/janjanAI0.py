# -*- coding: utf-8 -*-
'''
janjanAI0.py

The strongest of "Janken AI"

@autor  Tomoyuki Nohara
@date   2015/1/26
'''

import time
import random

# variable
const_max_win = 3
hand_dict = {"r":1, "s":2, "p":3}
hand_print_dict = {1:"グー", 2:"チョキ", 3:"パー"}

# init
flg_draw = False
win = [0]*2

# loop
while (max(win) < const_max_win):

    # Conputer's hand
    chand = random.randint(1, 3)

    while 1:
        # message
        if flg_draw:
            print "あいこ"
        else:
            print "じゃんけん...."

        # Player's hand
        phand_txt = raw_input("(何を出しますか?) (グー:r, チョキ:s, パー:p > ")

        if phand_txt not in ("r", "s", "p"):
            print "不正な入力です"
        else:
            phand = hand_dict[phand_txt]
            break

    # message
    if flg_draw:
        print "しょ!"
    else:
        print "ぽん!"

    print "あなた:%s -- %s:あいて" %(hand_print_dict[phand], hand_print_dict[chand])

    # check of issue
    # count win's number
    if (3 + hand_dict[phand_txt] - chand) % 3 == 2: # win
        flg_draw = False
        win[0] += 1
        print "あなたの勝ちです。"
    elif(3 + hand_dict[phand_txt] - chand) % 3 == 1:
        flg_draw = False
        win[1] += 1
        print "あなたの負けです。"
    else:
        flg_draw = True
        print "あいこです。"
        continue

    print "あなた: %s勝    ---    あいて:%s勝" % (win[0], win[1])

# 勝敗判定
if win[0] > win[1]:
    print "%s勝%s敗であなたの勝ちです。" % (win[0], win[1])
else:
    print "%s勝%s敗であなたの負けです。" % (win[0], win[1])

print "おわりです。ありがとうございました。"

