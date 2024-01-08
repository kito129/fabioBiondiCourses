# Angular Evolution Notebook

## Info

[repo](https://github.com/kito129/fabioBiondiCourses/tree/master/angularEvolution)

[Video course by Fabio Biondi](https://www.fabiobiondi.dev/video-courses/angular-evolution/)
- bought on 01/05/2024
- start on 01/05/2024

# Angular Fundamentals

## Intro

[New Website](https://angular.dev/)

1 - Modern Angular

2 - TypeScript
3 - Performance
4 - Insights
5 - RxJS


### Lesson 1.01. Standalone Project

```bash
npm i @angular/cli@latest ng new angular-demo  --standalone -S -s -t
```

oppure potete decidere di creare un progetto con la stessa versione che ho utilizzato nel corso:

```bash
npm i @angular/cli@17.0.2 ng new angular-demo  -S -s -t
```

# AGGIORNAMENTO: 
l'opzione --standalcone è ormai di default e non è più necessario specificarlo, quindi è sufficiente:

```bash
ng new angular-evolution  -S -s -t
```

-S skip test
-s inline style (CSS)
-t inline template

### Lesson 1.02. Interpolation and template tags