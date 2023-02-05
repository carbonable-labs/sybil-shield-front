<div align="center">
  <h1 align="center">SybilShield Frontend</h1>
  <h2 align="center">A solution for detecting and preventing sybil attacks on Starknet blockchain</h2>
  <br />
  <a href="https://github.com/carbonable-labs/sybil-shield-front/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  -
  <a href="https://github.com/carbonable-labs/sybil-shield-front/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  -
  <a href="https://github.com/carbonable-labs/sybil-shield-front/discussions">Ask a Question</a>
</div>

<div align="center">
<br />

[![GitHub Workflow Status](https://github.com/carbonable-labs/sybil-shield-front/actions/workflows/test.yml/badge.svg)](https://github.com/carbonable-labs/sybil-shield-front/actions/workflows/test.yml)
[![Project license](https://img.shields.io/github/license/keep-starknet-strange/garaga.svg?style=flat-square)](LICENSE)
[![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/carbonable-labs/sybil-shield-front/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)

</div>

## About

SybilShield is an open-source project built for the StarkNet ecosystem that utilizes blockchain data to detect Sybil attack behaviors.

A Sybil attack is a type of attack where an attacker creates multiple fake identities (also known as Sybil nodes) in a network in order to gain control or disrupt the network's operation.

SybilShield is implemented using:
- Apibara technology to explore on-chain data
- Python to detect and mitigate Sybil attacks by identifying and isolating fake identities
- [Remix](https://remix.run/docs)
- D3 Force to render the data

## Getting Started

### Prerequisites

Run the [backend](https://github.com/carbonable-labs/sybil-shield)
Add .env with BACKEND_URL={URL of your backend}

##### Development

From your terminal:

```sh
npm install
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

##### Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.


## Roadmap

See the [open issues](https://github.com/carbonable-labs/sybil-shield-front/issues) for
a list of proposed features (and known issues).


## Support

Reach out to the maintainer at one of the following places:

- [GitHub Discussions](https://github.com/carbonable-labs/sybil-shield-front/discussions)


## Project assistance

If you want to say **thank you** or/and support active development:

- Add a [GitHub Star](https://github.com/carbonable-labs/sybil-shield-front) to the
  project.
- Write interesting articles about the project on [Dev.to](https://dev.to/),
  [Medium](https://medium.com/) or your personal blog.

Together, we can make SybilShield **better**!

## Contributing

First off, thanks for taking the time to contribute! Contributions are what make
the open-source community such an amazing place to learn, inspire, and create.
Any contributions you make will benefit everybody else and are **greatly
appreciated**.


## Authors & contributors

For a full list of all authors and contributors, see
[the contributors page](https://github.com/carbonable-labs/sybil-shield-front/graphs/contributors).


## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.

## Resources

Here are some interesting resources about detection and mitigation of Sybil attacks:

- [Review on Detection and Mitigation of Sybil Attack in the Network](https://www.sciencedirect.com/science/article/pii/S187705091600082X)

> **Note:** This list is not exhaustive, and is not intended to be.


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->


<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
