package com.blog1.entity;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import javax.persistence.*;
import java.util.*;

@Table
@Entity
public class UserAccount {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "user_id")
    private UUID id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
            name = "assignedUserRoles",
            joinColumns = @JoinColumn(
                    name = "user_id",
                    foreignKey = @ForeignKey(name = "assignedRole_student_id_fk"),
                    referencedColumnName = "user_id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "role_id",
                    foreignKey = @ForeignKey(name = "assignedRole_role_id_fk"),
                    referencedColumnName = "role_id"
            )
    )
    private Set<Role> roles = new HashSet<>();

    @JsonIncludeProperties(value = {"id", "username"})
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_following",
            joinColumns = @JoinColumn(
                    name = "user_id",
                    foreignKey = @ForeignKey(name = "user_following_id_fk"),
                    referencedColumnName = "user_id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "following_id",
                    foreignKey = @ForeignKey(name = "following_user_id_fk"),
                    referencedColumnName = "user_id"
            )
    )
    private Set<UserAccount> following = new HashSet<>();

    @JsonIncludeProperties(value = {"id", "username"})
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_follower",
            joinColumns = @JoinColumn(
                    name = "user_id",
                    foreignKey = @ForeignKey(name = "user_follower_id_fk"),
                    referencedColumnName = "user_id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "follower_id",
                    foreignKey = @ForeignKey(name = "follower_user_id_fk"),
                    referencedColumnName = "user_id"
            )
    )
    private Set<UserAccount> followers = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userAccount", orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<Post> posts = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userAccount", orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<Vote> votes = new HashSet<>();

    public UserAccount() {}

    public UserAccount(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public void addRole(Role role) {
        roles.add(role);
        role.getUserAccounts().add(this);
    }

    public Set<UserAccount> getFollowing() {
        return following;
    }

    public void setFollowing(Set<UserAccount> following) {
        this.following = following;
    }

    public void addFollowing(UserAccount userAccount) {
        userAccount.followers.add(this);
        following.add(userAccount);
    }

    public Set<UserAccount> getFollowers() {
        return followers;
    }

    public void setFollowers(Set<UserAccount> followers) {
        this.followers = followers;
    }

    public void addFollower(UserAccount userAccount) {
        userAccount.following.add(this);
        followers.add(userAccount);
    }

    public Set<Post> getPosts() {
        return posts;
    }

    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }

    public void addPost(Post post) {
        post.setUserAccount(this);
        posts.add(post);
    }

    public Set<Vote> getVotes() {
        return votes;
    }

    public void setVotes(Set<Vote> votes) {
        this.votes = votes;
    }

    @Override
    public String toString() {
        return "UserAccount{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", roles=" + roles +
                ", posts=" + posts +
                ", votes=" + votes +
                '}';
    }
}
