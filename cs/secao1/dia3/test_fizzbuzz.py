from ex1 import fizzbuzz
import pytest


def test_switches_multiples_of_three_with_fizz():
    assert fizzbuzz(3) == [1, 2, 'Fizz']


def test_switches_multiples_of_five_with_buzz():
    assert fizzbuzz(5) == [1, 2, 'Fizz', 4, 'Buzz']


def test_switches_multiples_of_three_and_five_with_fizzbuzz():
    assert fizzbuzz(15) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8,
                            'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']


def test_raises_exception_if_not_a_number():
    with pytest.raises(TypeError, match='precisa ser um inteiro'):
        fizzbuzz('Teste')


def test_raises_exception_if_number_less_than_one():
    with pytest.raises(ValueError, match='maior que zero'):
        fizzbuzz(-10)
