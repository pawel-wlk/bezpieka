from cryptogram import Cryptogram

class Decryptor:
    def __init__(self, data):
        self.cryptograms = []

        self.letters_freq = {
            'a': 89, 'i': 82, 'o': 78, 'e': 77, 'z': 56, 'n': 55, 'r': 47, 'w': 47, 's': 43, 't': 40, 'c': 40, 'y': 38,
            'k': 35, 'd': 33, 'p': 31, 'm': 28, 'u': 25, 'j': 23, 'l': 21, 'b': 15, 'g': 14, 'h': 11, 'f': 3, 'q': 1,
            'v': 1, 'x': 1, ' ': 100, ',': 16, '.': 10, '-': 10, '"': 10, '!': 10, '?': 10, ':': 10, ';': 10, '(': 10,
            ')': 10
        }

        # big letters
        for i in range(65, 91):
            self.letters_freq[chr(i)] = 10

        # Numbers
        for i in range(48, 58):
            self.letters_freq[chr(i)] = 10

        for line in data.splitlines():
            self.cryptograms.append(Cryptogram(line))

    def find_possible_keys(self, pos):
        possible_keys = {}
        for crypt in self.cryptograms:
            if (pos >= len(crypt.chars)):
                continue

            for letter in self.letters_freq.keys():
                possible_key = ord(crypt.get_chr(pos)) ^ ord(letter)

                possible_keys[possible_key] = possible_keys.get(
                    possible_key, 0) + self.letters_freq[letter]

        return [k for k in sorted(possible_keys.keys(),
                                  key=lambda k: possible_keys[k], reverse=True)]

    def find_best_key(self, keys, pos):
        best_possible = ord(' ')
        best_counter = 0
        for letter in keys:
            counter = 0
            for crypt in self.cryptograms:
                if (pos >= len(crypt.chars)):
                    continue
                # Check if XOR get char from alphabet
                if (chr(ord(crypt.get_chr(pos)) ^ letter)) in self.letters_freq.keys():
                    counter += 1
            if counter > best_counter:
                best_counter = counter
                best_possible = letter

        return best_possible

    def find_key(self):
        longest = max(len(crypt.chars) for crypt in self.cryptograms)

        return [self.find_best_key(self.find_possible_keys(i), i) for i in range(longest)]

    def decrypt(self):
        key = self.find_key()
        result = ""
        for crypt in self.cryptograms:
            for i in range(0, len(crypt.chars)):
                result += chr(ord(crypt.get_chr(i)) ^ key[i])
            result += '\n'

        return result
