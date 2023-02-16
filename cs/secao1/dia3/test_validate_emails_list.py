from ex4 import validate_emails_list


def test_function_returns_valid_emails():
    emails = ['test@test.com', 'abc@def.ghi', 'o-1@tch4u.com']
    expected = ['test@test.com', 'abc@def.ghi', 'o-1@tch4u.com']
    assert validate_emails_list(emails) == expected


def test_returns_only_valid_emails():
    emails = ['',
              'test@test.com',
              '123@domain.com',
              'aa@1*3.com',
              'wont@work.coooom']

    expected = ['test@test.com']
    assert validate_emails_list(emails) == expected
