package com.solsist.pojo;

public class Music {
    int id;
    String title;
    String singer;

    @Override
    public String toString() {
        return "Music{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", singer='" + singer + '\'' +
                '}';
    }
}
