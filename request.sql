--№3 На SQL
--    Есть таблица сотрудников col. В ней поля id, fullname, subdivision_name, birth_date. Вторая таблица learning. В ней поля id, col_id,
--    course_name, score. Нужно написать select запрос,
--    который выведет всех сотрудников подразделения "бухгалтерия", которые прошли курс "excel" с баллом выше 80.
--    И по ним вывести фио, дату рождения и балл.

SELECT col.fullname, col.birth_date, learning.score
FROM col
INNER JOIN learning ON learning.col_id = col.id AND course_name = 'excel' AND score > 80
WHERE subdivision_name = 'бухгалтерия'