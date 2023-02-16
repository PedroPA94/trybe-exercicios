from ex2 import get_phone_from_phrase
import pytest


def test_function_returns_expected_value():
    assert get_phone_from_phrase('01-AERIALS') == '01-2374257'


def test_raises_type_error_if_phrase_is_empty():
    with pytest.raises(TypeError, match='A frase não pode ser vazia'):
        get_phone_from_phrase('')


def test_raises_value_error_if_phrase_is_too_long():
    with pytest.raises(ValueError, match='30 caracteres'):
        get_phone_from_phrase('abcdefghijklmnopqrstuvxqwyz01010101')


def test_raises_index_error_if_phrase_contains_invalid_character():
    with pytest.raises(IndexError, match='Caractere inválido'):
        get_phone_from_phrase('1-AE-*')
