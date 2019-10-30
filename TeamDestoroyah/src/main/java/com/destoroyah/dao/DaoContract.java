package com.destoroyah.dao;

import java.util.List;

public interface DaoContract<T> {
	
	List<T> findAll();
	
	T findById(int id);
	
	List<T> findAllByTitle(String title);
	
	void insert(T t);
	
	void delete(T t);

}
