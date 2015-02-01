import numpy as np

# janken paturn
N=8

move = {'g':1,'c':2,'p':3}

def expVec(n,N):
	ans = np.exp(2*np.pi*n/N*1j)
	# print '** expVec **'
	# print ans
	# print '************'
	return ans

def dotComplex(a1,a2):
	ans = np.conj(a1)*a2
	# print '** dot Comples **'
	# print ans
	# print np.angle(ans,deg=True)
	# print np.abs(ans)
	# print '*****************'

	return ans

def neverLoose(chg_move):

	a = expVec(chg_move,N)
	# win number
	r = expVec(1,N)
	# a = dotComplex(a,r)
	# dotComplex(a,r)

	ang = np.angle(r*a,deg=False)
	# print np.angle(a*r,deg=True)
	next_no = ang/(2*np.pi/N)
	print('next no %d' % next_no)
	print np.angle(r*a,deg=True)


if __name__ == '__main__':
	print 'run to main'
	# a = expVec(1,N)
	# b = expVec(1,N)

	# dotComplex(a,b)
	# dotComplex(b,a)

	for n in range(-1,10):
		print('no %d' % n)
		chg_move = n
		cmp_move = neverLoose(chg_move)
		print '----------'
