package com.blog1;

import com.blog1.entity.Post;
import com.blog1.entity.Role;
import com.blog1.entity.UserAccount;
import com.blog1.entity.Vote;
import com.blog1.repository.PostRepository;
import com.blog1.repository.RoleRepository;
import com.blog1.repository.UserAccountRepository;
import com.blog1.repository.VoteRepository;
import com.github.javafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.*;

@SpringBootApplication
public class Blog1Application {

	public static void main(String[] args) {
		SpringApplication.run(Blog1Application.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(
			@Autowired UserAccountRepository userAccountRepository,
			@Autowired PostRepository postRepository,
			@Autowired VoteRepository voteRepository,
			@Autowired RoleRepository roleRepository
			) {
		return (args) -> {
			Faker faker = new Faker();
			Random random = new Random();

			List<Role> userRoles = new ArrayList<>();
			Role u1 = new Role("ADMIN");
			Role u2 = new Role("MANAGER");
			Role u3 = new Role("DEVELOPER");
			userRoles.add(u1);
			userRoles.add(u2);
			userRoles.add(u3);
			roleRepository.saveAll(userRoles);
			List<Role> rolesToSave = roleRepository.findAll();


			// saving users
			List<UserAccount> userAccountList = new ArrayList<>();
			for (int i = 0; i < 10; i++) {
				String username = faker.name().username();
				UserAccount ua1 = new UserAccount(username, new BCryptPasswordEncoder().encode("test123"), String.format("%s@email.com", username));
				ua1.addRole(rolesToSave.get(random.nextInt(userRoles.size())));
				userAccountList.add(ua1);
			}
			userAccountRepository.saveAll(userAccountList);

//			List<UserAccount> foundUserAccounts3 = userAccountRepository.findAll();
//			for (UserAccount u : foundUserAccounts3) {
//				u.addFollower(foundUserAccounts3.get(random.nextInt(foundUserAccounts3.size())));
//				u.addFollowing(foundUserAccounts3.get(random.nextInt(foundUserAccounts3.size())));
//				userAccountRepository.save(u);
//			}

			// saving posts
			List<UserAccount> foundUserAccounts = userAccountRepository.findAll();
			for (int i = 1; i <= 200; i++) {
				Post p1 = new Post(String.format("Title_%d", i), String.format("This is content to post #%d", i));
				UserAccount randomUser = foundUserAccounts.get(random.nextInt(foundUserAccounts.size()));
				randomUser.addPost(p1);
				postRepository.save(p1);
			}

			// saving votes
			List<Boolean> bools = new ArrayList<>();
			bools.add(true);
			bools.add(false);
			List<UserAccount> foundUserAccounts1 = userAccountRepository.findAll();
			List<Vote> votesToSave = new ArrayList<>();
			for (Post p : postRepository.findAll()) {
				Vote newVote = new Vote(bools.get(random.nextInt(bools.size())));
				newVote.setUserAccount(foundUserAccounts1.get(random.nextInt(foundUserAccounts.size())));
				p.addVote(newVote);
				votesToSave.add(newVote);
			}
			voteRepository.saveAll(votesToSave);

			userAccountRepository.findAll().forEach(userAccount -> System.out.println(userAccount));

		};

	}

}
