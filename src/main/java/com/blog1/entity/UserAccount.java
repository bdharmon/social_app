package com.blog1.entity;

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

    public Set<Post> getPost() {
        return posts;
    }

    public void setPost(Set<Post> post) {
        this.posts = post;
    }

    public void addPost(Post post) {
            post.setUserAccount(this);
            posts.add(post);
    }

    public Set<Vote> getVote() {
        return votes;
    }

    public void setVote(Set<Vote> vote) {
        this.votes = vote;
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
