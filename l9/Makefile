all: login smartnot indeks

login: login.c
	gcc login.c -o login -fno-stack-protector -z execstack

smartnot: smartnot.c
	gcc smartnot.c -o smartnot -m32 -fno-stack-protector -z execstack

indeks: indeks.c
	gcc indeks.c -o indeks -m32 -fno-stack-protector -z execstack
