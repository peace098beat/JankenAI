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
log = [0]*5

# loop
for i in range(1000):
    # Conputer's hand
    chand = random.randint(1, 3)
    print chand

    print hand_print_dict[chand]
    # time.sleep(0.1)

    log[chand] += 1

print "グー %d" % log[hand_dict["r"]]
print "チョキ: %d" % log[hand_dict["s"]]
print "パー: %d" % log[hand_dict["p"]]

