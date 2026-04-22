import './pages.css'

const concepts = [
  {
    icon: '🐙',
    title: 'What is Git?',
    description:
      'Git is a version control system that lives on your computer. It tracks every change you make to your code so you can go back in time, compare versions, and never lose work.',
  },
  {
    icon: '☁️',
    title: 'What is GitHub?',
    description:
      'GitHub is a cloud platform that hosts your Git repositories online. It lets you back up your code, share it with others, and collaborate on projects from anywhere.',
  },
  {
    icon: '📂',
    title: 'Repositories',
    description:
      'A repository (repo) is a project folder tracked by Git. It contains all your files plus the complete history of every change ever made to those files.',
  },
  {
    icon: '📸',
    title: 'Commits',
    description:
      'A commit is a snapshot of your project at a point in time. Each commit has a message describing what changed. Think of commits like save points in a video game.',
  },
  {
    icon: '🌿',
    title: 'Branches',
    description:
      'Branches let you work on a new feature or bug fix without touching the main codebase. When you\'re done, you merge the branch back in — keeping main always stable.',
  },
  {
    icon: '⬆️',
    title: 'Push & Pull',
    description:
      'Push sends your local commits up to GitHub so others can see them. Pull downloads the latest changes from GitHub to your machine so you stay up to date.',
  },
  {
    icon: '🔀',
    title: 'Pull Requests',
    description:
      'A pull request (PR) is a proposal to merge your branch into main. Teammates can review the code, leave comments, request changes, and approve — then merge.',
  },
  {
    icon: '🍴',
    title: 'Clone & Fork',
    description:
      'Clone copies a repo to your machine so you can work on it. Fork creates your own copy of someone else\'s repo on GitHub — great for contributing to open source.',
  },
]

const steps = [
  {
    title: 'Install Git',
    description:
      'Download and install Git from git-scm.com. During setup, choose VS Code as the default editor. Verify the install by opening a terminal and running:',
    code: 'git --version',
  },
  {
    title: 'Create a GitHub Account',
    description:
      'Go to github.com and sign up for a free account. Choose a username you\'re happy with — it will appear on all your public repos and contributions.',
  },
  {
    title: 'Install VS Code',
    description:
      'Download VS Code from code.visualstudio.com. Install the "GitLens" extension for a better Git experience — open the Extensions panel (Ctrl+Shift+X) and search for it.',
  },
  {
    title: 'Open Your Project in VS Code',
    description:
      'Open VS Code, then go to File → Open Folder and select your project directory. You can also right-click a folder in File Explorer and choose "Open with Code".',
  },
  {
    title: 'Open the Integrated Terminal',
    description:
      'Press Ctrl+` (backtick) to open the built-in terminal in VS Code. All Git commands are run here. You should see your project folder path in the prompt.',
  },
  {
    title: 'Initialize a Git Repository',
    description:
      'Run the command below to turn your project folder into a Git repository. A hidden .git folder will appear — that\'s where Git stores all its history.',
    code: 'git init',
  },
  {
    title: 'Stage and Commit Your Files',
    description:
      'Stage all files with git add, then create your first commit. The -m flag lets you write the commit message inline.',
    code: `git add .
git commit -m "Initial commit"`,
  },
  {
    title: 'Create a Repository on GitHub',
    description:
      'Go to github.com, click the "+" icon → "New repository". Give it a name, leave it public or private, and click "Create repository". Do NOT initialize with a README.',
  },
  {
    title: 'Connect and Push to GitHub',
    description:
      'Copy the remote URL from GitHub (HTTPS tab). Add it as the remote origin for your project, then push your commit to GitHub.',
    code: `git remote add origin https://github.com/you/your-repo.git
git branch -M main
git push -u origin main`,
  },
  {
    title: 'Pull Changes Later',
    description:
      'Whenever a teammate pushes changes (or you edit on GitHub directly), run this command to download the latest code to your machine.',
    code: 'git pull',
  },
]

export default function Github() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>GitHub Guide</h1>
        <p>
          Understand the core concepts of Git and GitHub, then follow the
          step-by-step guide to connect your VS Code project to GitHub.
        </p>
      </header>

      <h2 className="section-title">Core Concepts</h2>
      <div className="cards-grid">
        {concepts.map((c) => (
          <div className="card" key={c.title}>
            <span className="card-icon">{c.icon}</span>
            <h2>{c.title}</h2>
            <p>{c.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Step-by-Step: VS Code → GitHub</h2>
      <div className="guide">
        <div className="guide-steps">
          {steps.map((step, i) => (
            <div className="guide-step" key={step.title}>
              <div className="guide-step-num">{i + 1}</div>
              <div className="guide-step-body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.code && <code>{step.code}</code>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
