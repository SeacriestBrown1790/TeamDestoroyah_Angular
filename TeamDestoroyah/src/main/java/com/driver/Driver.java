package com.driver;



import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.sql.Timestamp;

import com.destoroyah.dao.PostDao;
import com.destoroyah.dao.UserDao;
import com.destoroyah.model.Post;
import com.destoroyah.model.User;

public class Driver {
	
	public static void main(String[] args) {
		UserDao ud = new UserDao();
		PostDao pd = new PostDao();	
		Date date = new Date();
		Timestamp ts = new Timestamp(date.getTime());
		Set<Post> pt = new HashSet<>();
		
		
		User u1 = new User("Bill","liederer","Bilbo","Bill",30,"male",ts,"LiedererBill@gmail.com",pt);
		Post p1 = new Post(ts,"this is a post",u1,null);
		u1.getPost().add(p1);
		p1.setUser(u1);
		
		ud.insert(u1);
		//pd.insert(p1);
		
		
		
		
		
		
	}

}
