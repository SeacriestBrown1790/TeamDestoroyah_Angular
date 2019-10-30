package com.destoroyah.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.config.util.HibernateUtil;
import com.destoroyah.model.Post;

public class PostDao implements DaoContract<Post>{

	@Override
	public List<Post> findAll() {
		Session ses = HibernateUtil.getSession();
		String hql = "from Post";
		return ses.createQuery(hql).list();

	}

	@Override
	public Post findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Post> findAllByTitle(String title) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void insert(Post p) {
		Session ses = HibernateUtil.getSession();
		Transaction t = ses.beginTransaction();
		ses.persist(p);
		t.commit();

	}

	@Override
	public void delete(Post t) {
		// TODO Auto-generated method stub
		
	}

}
