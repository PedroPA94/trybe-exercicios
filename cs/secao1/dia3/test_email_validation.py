from ex3 import email_validation
import pytest


def test_validates_correct_email_input():
    assert email_validation('teste@teste.com') is None


def test_raises_exception_if_empty_input():
    with pytest.raises(ValueError, match='não pode ser vazio'):
        email_validation('')


def test_raises_exception_if_input_not_string():
    with pytest.raises(TypeError, match='precisa ser uma string'):
        email_validation(1234)


def test_raises_exception_if_first_letter_not_alpha():
    with pytest.raises(TypeError, match='precisa começar com uma letra'):
        email_validation('42_adams@guide.com')


def test_raises_exception_if_username_contains_invalid_char():
    with pytest.raises(TypeError, match='letras, números, - ou _'):
        email_validation('h4ck3r//@biz.nes')


def test_raises_exception_if_website_not_alhpanumeric():
    with pytest.raises(TypeError, match='só pode conter letras e números'):
        email_validation('testing@***.com')


def test_raises_exception_if_extentsion_too_long():
    with pytest.raises(ValueError, match='pode ter até três caracteres'):
        email_validation('testg@test.coooooom')
