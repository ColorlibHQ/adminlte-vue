<template>
  <LteAppContent
    title="Mailbox"
    :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Inbox' }]"
  >
            <div class="row g-3">
              <!-- Folder sidebar -->
              <div class="col-lg-3">
                <a href="../mailbox/compose.html" class="btn btn-primary w-100 mb-3">
                  <i class="bi bi-pencil-square me-1" aria-hidden="true"></i>
                  Compose
                </a>
                <LteCard title="Folders" body-class="p-0">
                    <ul class="nav nav-pills flex-column mb-0">
                      <li class="nav-item">
                        <a
                          href="../mailbox/inbox.html"
                          class="nav-link active rounded-0 d-flex justify-content-between"
                        >
                          <span> <i class="bi bi-inbox me-2" aria-hidden="true"></i>Inbox </span>
                          <span class="badge text-bg-primary">3</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link rounded-0">
                          <i class="bi bi-send me-2" aria-hidden="true"></i>Sent
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link rounded-0 d-flex justify-content-between">
                          <span>
                            <i class="bi bi-file-earmark me-2" aria-hidden="true"></i>
                            Drafts
                          </span>
                          <span class="badge text-bg-secondary">2</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link rounded-0">
                          <i class="bi bi-star me-2" aria-hidden="true"></i>Starred
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link rounded-0">
                          <i class="bi bi-archive me-2" aria-hidden="true"></i>Archive
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link rounded-0">
                          <i class="bi bi-exclamation-octagon me-2" aria-hidden="true"></i>
                          Spam
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link rounded-0">
                          <i class="bi bi-trash me-2" aria-hidden="true"></i>Trash
                        </a>
                      </li>
                    </ul>
                </LteCard>
                <LteCard class="mt-3" title="Labels" body-class="p-0">
                    <ul class="nav flex-column mb-0">
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i
                            class="bi bi-circle-fill text-primary me-2"
                            style="font-size: 0.6rem"
                            aria-hidden="true"
                          ></i>
                          Customers
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i
                            class="bi bi-circle-fill text-success me-2"
                            style="font-size: 0.6rem"
                            aria-hidden="true"
                          ></i>
                          Billing
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i
                            class="bi bi-circle-fill text-warning me-2"
                            style="font-size: 0.6rem"
                            aria-hidden="true"
                          ></i>
                          Internal
                        </a>
                      </li>
                    </ul>
                </LteCard>
              </div>

              <!-- Inbox list -->
              <div class="col-lg-9">
                <LteCard body-class="p-0">
                  <template #header>
                    <h3 class="card-title">Inbox</h3>
                    <div class="card-tools">
                      <div class="input-group input-group-sm" style="width: 16rem">
                        <span class="input-group-text">
                          <i class="bi bi-search" aria-hidden="true"></i>
                        </span>
                        <input
                          type="search"
                          class="form-control"
                          placeholder="Search mail…"
                          aria-label="Search mail"
                        />
                      </div>
                    </div>
                  </template>
                    <div class="d-flex align-items-center px-3 py-2 border-bottom">
                      <div class="form-check mb-0">
                        <input class="form-check-input" type="checkbox" id="select-all" />
                        <label class="form-check-label visually-hidden" for="select-all">
                          Select all
                        </label>
                      </div>
                      <div class="btn-group btn-group-sm ms-3">
                        <button class="btn btn-outline-secondary" type="button" title="Refresh">
                          <i class="bi bi-arrow-clockwise" aria-hidden="true"></i>
                        </button>
                        <button class="btn btn-outline-secondary" type="button" title="Archive">
                          <i class="bi bi-archive" aria-hidden="true"></i>
                        </button>
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          title="Mark as spam"
                        >
                          <i class="bi bi-exclamation-octagon" aria-hidden="true"></i>
                        </button>
                        <button class="btn btn-outline-secondary" type="button" title="Delete">
                          <i class="bi bi-trash" aria-hidden="true"></i>
                        </button>
                      </div>
                      <span class="ms-auto text-secondary small"> 1&ndash;8 of 8 </span>
                    </div>
                    <ul class="list-group list-group-flush mb-0">
                      <li
                        class="list-group-item d-flex align-items-center gap-2 fw-semibold bg-body-secondary"
                      >
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" id="msg-0" />
                          <label class="form-check-label visually-hidden" for="msg-0">
                            Select message from Olivia Bennett
                          </label>
                        </div>
                        <button
                          class="btn btn-link p-0 text-warning lh-1"
                          type="button"
                          title="Starred"
                          aria-label="Starred"
                        >
                          <i class="bi bi-star-fill" aria-hidden="true"></i>
                        </button>
                        <a
                          href="../mailbox/read.html"
                          class="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                          style="min-width: 0"
                        >
                          <span class="text-truncate" style="min-width: 9rem">
                            Olivia Bennett
                          </span>
                          <span class="flex-grow-1 text-truncate" style="min-width: 0">
                            <span class="badge text-bg-primary me-2"> &middot; </span>
                            Re: design system v2.4 sign-off
                            <span class="fw-normal text-secondary">
                              &nbsp;&mdash; Approved — a few small notes on the success state for
                              forms.
                            </span>
                          </span>
                          <span class="text-secondary small text-md-end" style="min-width: 5rem">
                            10:42 AM
                          </span>
                        </a>
                      </li>
                      <li
                        class="list-group-item d-flex align-items-center gap-2 fw-semibold bg-body-secondary"
                      >
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" id="msg-1" />
                          <label class="form-check-label visually-hidden" for="msg-1">
                            Select message from GitHub
                          </label>
                        </div>
                        <button
                          class="btn btn-link p-0 text-warning lh-1"
                          type="button"
                          title="Star"
                          aria-label="Star"
                        >
                          <i class="bi bi-star" aria-hidden="true"></i>
                        </button>
                        <a
                          href="../mailbox/read.html"
                          class="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                          style="min-width: 0"
                        >
                          <span class="text-truncate" style="min-width: 9rem"> GitHub </span>
                          <span class="flex-grow-1 text-truncate" style="min-width: 0">
                            <span class="badge text-bg-secondary me-2"> &middot; </span>
                            [fullcalendar/fullcalendar] PR #6912 merged
                            <span class="fw-normal text-secondary">
                              &nbsp;&mdash; Allow custom render hooks for time grid axis labels.
                            </span>
                          </span>
                          <span class="text-secondary small text-md-end" style="min-width: 5rem">
                            9:08 AM
                          </span>
                        </a>
                      </li>
                      <li
                        class="list-group-item d-flex align-items-center gap-2 fw-semibold bg-body-secondary"
                      >
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" id="msg-2" />
                          <label class="form-check-label visually-hidden" for="msg-2">
                            Select message from Stripe
                          </label>
                        </div>
                        <button
                          class="btn btn-link p-0 text-warning lh-1"
                          type="button"
                          title="Star"
                          aria-label="Star"
                        >
                          <i class="bi bi-star" aria-hidden="true"></i>
                        </button>
                        <a
                          href="../mailbox/read.html"
                          class="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                          style="min-width: 0"
                        >
                          <span class="text-truncate" style="min-width: 9rem"> Stripe </span>
                          <span class="flex-grow-1 text-truncate" style="min-width: 0">
                            <span class="badge text-bg-success me-2"> &middot; </span>
                            Your May invoice is ready
                            <span class="fw-normal text-secondary">
                              &nbsp;&mdash; Invoice INV-2026-00428 totaling $108.31 has been issued.
                            </span>
                          </span>
                          <span class="text-secondary small text-md-end" style="min-width: 5rem">
                            8:15 AM
                          </span>
                        </a>
                      </li>
                      <li class="list-group-item d-flex align-items-center gap-2">
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" id="msg-3" />
                          <label class="form-check-label visually-hidden" for="msg-3">
                            Select message from Marcus Reyes
                          </label>
                        </div>
                        <button
                          class="btn btn-link p-0 text-warning lh-1"
                          type="button"
                          title="Starred"
                          aria-label="Starred"
                        >
                          <i class="bi bi-star-fill" aria-hidden="true"></i>
                        </button>
                        <a
                          href="../mailbox/read.html"
                          class="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                          style="min-width: 0"
                        >
                          <span class="text-truncate" style="min-width: 9rem"> Marcus Reyes </span>
                          <span class="flex-grow-1 text-truncate" style="min-width: 0">
                            <span class="badge text-bg-info me-2"> &middot; </span>
                            Lunch on Thursday?
                            <span class="fw-normal text-secondary">
                              &nbsp;&mdash; Free around 1pm at the usual place. Let me know.
                            </span>
                          </span>
                          <span class="text-secondary small text-md-end" style="min-width: 5rem">
                            Yesterday
                          </span>
                        </a>
                      </li>
                      <li class="list-group-item d-flex align-items-center gap-2">
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" id="msg-4" />
                          <label class="form-check-label visually-hidden" for="msg-4">
                            Select message from Linear
                          </label>
                        </div>
                        <button
                          class="btn btn-link p-0 text-warning lh-1"
                          type="button"
                          title="Star"
                          aria-label="Star"
                        >
                          <i class="bi bi-star" aria-hidden="true"></i>
                        </button>
                        <a
                          href="../mailbox/read.html"
                          class="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                          style="min-width: 0"
                        >
                          <span class="text-truncate" style="min-width: 9rem"> Linear </span>
                          <span class="flex-grow-1 text-truncate" style="min-width: 0">
                            <span class="badge text-bg-warning me-2"> &middot; </span>
                            [ADM-441] Calendar drag-and-drop not working on Safari iOS
                            <span class="fw-normal text-secondary">
                              &nbsp;&mdash; Reproduces consistently on iOS 18.4 in Safari and
                              Chrome.
                            </span>
                          </span>
                          <span class="text-secondary small text-md-end" style="min-width: 5rem">
                            Yesterday
                          </span>
                        </a>
                      </li>
                      <li class="list-group-item d-flex align-items-center gap-2">
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" id="msg-5" />
                          <label class="form-check-label visually-hidden" for="msg-5">
                            Select message from Vercel
                          </label>
                        </div>
                        <button
                          class="btn btn-link p-0 text-warning lh-1"
                          type="button"
                          title="Star"
                          aria-label="Star"
                        >
                          <i class="bi bi-star" aria-hidden="true"></i>
                        </button>
                        <a
                          href="../mailbox/read.html"
                          class="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                          style="min-width: 0"
                        >
                          <span class="text-truncate" style="min-width: 9rem"> Vercel </span>
                          <span class="flex-grow-1 text-truncate" style="min-width: 0">
                            <span class="badge text-bg-success me-2"> &middot; </span>
                            Deployment succeeded — production
                            <span class="fw-normal text-secondary">
                              &nbsp;&mdash; main@a3c91fb deployed to production in 47s.
                            </span>
                          </span>
                          <span class="text-secondary small text-md-end" style="min-width: 5rem">
                            May 16
                          </span>
                        </a>
                      </li>
                      <li class="list-group-item d-flex align-items-center gap-2">
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" id="msg-6" />
                          <label class="form-check-label visually-hidden" for="msg-6">
                            Select message from Sara Khan
                          </label>
                        </div>
                        <button
                          class="btn btn-link p-0 text-warning lh-1"
                          type="button"
                          title="Star"
                          aria-label="Star"
                        >
                          <i class="bi bi-star" aria-hidden="true"></i>
                        </button>
                        <a
                          href="../mailbox/read.html"
                          class="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                          style="min-width: 0"
                        >
                          <span class="text-truncate" style="min-width: 9rem"> Sara Khan </span>
                          <span class="flex-grow-1 text-truncate" style="min-width: 0">
                            <span class="badge text-bg-primary me-2"> &middot; </span>
                            Customer interview notes — Acme Corp
                            <span class="fw-normal text-secondary">
                              &nbsp;&mdash; Three big themes: onboarding friction, billing
                              visibility, mobile.
                            </span>
                          </span>
                          <span class="text-secondary small text-md-end" style="min-width: 5rem">
                            May 15
                          </span>
                        </a>
                      </li>
                      <li class="list-group-item d-flex align-items-center gap-2">
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" id="msg-7" />
                          <label class="form-check-label visually-hidden" for="msg-7">
                            Select message from AWS
                          </label>
                        </div>
                        <button
                          class="btn btn-link p-0 text-warning lh-1"
                          type="button"
                          title="Star"
                          aria-label="Star"
                        >
                          <i class="bi bi-star" aria-hidden="true"></i>
                        </button>
                        <a
                          href="../mailbox/read.html"
                          class="flex-grow-1 d-flex flex-column flex-md-row gap-md-3 text-decoration-none text-body"
                          style="min-width: 0"
                        >
                          <span class="text-truncate" style="min-width: 9rem"> AWS </span>
                          <span class="flex-grow-1 text-truncate" style="min-width: 0">
                            <span class="badge text-bg-danger me-2"> &middot; </span>
                            Your monthly bill summary
                            <span class="fw-normal text-secondary">
                              &nbsp;&mdash; Total charges for April 2026: $312.94. View in console.
                            </span>
                          </span>
                          <span class="text-secondary small text-md-end" style="min-width: 5rem">
                            May 14
                          </span>
                        </a>
                      </li>
                    </ul>
                </LteCard>
              </div>
            </div>
  </LteAppContent>
</template>
