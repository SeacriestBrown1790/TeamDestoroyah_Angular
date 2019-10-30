package com.destoroyah.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.config.util.HibernateUtil;
import com.destoroyah.model.User;

public class UserDao implements DaoContract<User>{

	@Override
	public List<User> findAll() {
		Session ses = HibernateUtil.getSession();
		String hql = "from User";
		return ses.createQuery(hql).list();

	}

	@Override
	public User findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findAllByTitle(String title) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void insert(User u) {
		Session ses = HibernateUtil.getSession();
		Transaction t = ses.beginTransaction();
		ses.persist(u);
		t.commit();
		
	}

	@Override
	public void delete(User t) {
		// TODO Auto-generated method stub
		
	}


}
